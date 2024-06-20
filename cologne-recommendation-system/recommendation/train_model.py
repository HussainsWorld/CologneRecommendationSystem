import pickle
from sklearn.decomposition import PCA
import numpy as np

def train_model(cologne_data):
    pca = PCA(n_components=3)
    pca.fit(cologne_data)
    with open('model.pkl', 'wb') as f:
        pickle.dump(pca, f)

if __name__ == "__main__":
    cologne_data = np.random.rand(100, 5)  
    train_model(cologne_data)
