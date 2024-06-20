import sys
import json
import pandas as pd
from surprise import Dataset, Reader, SVD

def load_model():
    with open('model.pkl', 'rb') as f:
        return pickle.load(f)

def recommend(user_id, user_preferences, cologne_data):
    # Load user preferences into Surprise format
    reader = Reader(rating_scale=(1, 5))
    data = Dataset.load_from_df(user_preferences[['user_id', 'cologne_id', 'rating']], reader)

    # Train the SVD algorithm
    trainset = data.build_full_trainset()
    algo = SVD()
    algo.fit(trainset)

    # Get a list of all cologne ids
    all_cologne_ids = cologne_data['cologne_id'].unique()

    # Predict ratings for all colognes the user hasn't rated yet
    predictions = [algo.predict(user_id, cologne_id) for cologne_id in all_cologne_ids]

    # Sort predictions by estimated rating
    recommendations = sorted(predictions, key=lambda x: x.est, reverse=True)

    # Get top-n recommendations
    top_recommendations = recommendations[:10]

    # Get cologne details for top recommendations
    recommended_colognes = []
    for recommendation in top_recommendations:
        cologne_id = recommendation.iid
        cologne_details = cologne_data[cologne_data['cologne_id'] == cologne_id].to_dict('records')[0]
        recommended_colognes.append(cologne_details)

    return recommended_colognes

if __name__ == "__main__":
    user_id = int(sys.argv[1])
    
    # Load user preferences
    user_preferences = pd.read_csv('user_preferences.csv')

    # Load cologne data
    cologne_data = pd.read_csv('cologne_data.csv')

    recommendations = recommend(user_id, user_preferences, cologne_data)
    print(json.dumps(recommendations))
