import pandas as pd
from sklearn.ensemble import RandomForestClassifier
from sklearn.naive_bayes import MultinomialNB
from sklearn.svm import LinearSVC     
from sklearn.model_selection import cross_validate, train_test_split
from sklearn.linear_model import LogisticRegression


bdd = pd.read_csv("C:/Users/DELL/Documents/Phishing_PRJ-copie/src/dataset/processed/dataset_pretraite_vect.csv")

print(bdd.head())

#cible
y = bdd["target"]

#features
x = bdd.drop(columns="target")

# Initialiser les modèles

foret= RandomForestClassifier(n_estimators=200, random_state=42)
bayes = MultinomialNB()
svm = LinearSVC(max_iter=5000,random_state=42)
log = LogisticRegression(max_iter=1000, random_state=42, solver="saga")

x_train, x_test, y_train, y_test = train_test_split(x, y, test_size=0.2, random_state=42)

foret.fit(x_train, y_train)
bayes.fit(x_train, y_train)
svm.fit(x_train, y_train)
log.fit(x_train, y_train)

test_score_foret = foret.score(x_test, y_test)
test_score_bayes = bayes.score(x_test, y_test)
test_score_svm = svm.score(x_test, y_test)
test_score_log = log.score(x_test, y_test)



print(f"Random Forest - Test Accuracy: {test_score_foret:.2f}")
print(f"Naive Bayes - Test Accuracy: {test_score_bayes:.2f}")
print(f"SVM - Test Accuracy: {test_score_svm:.2f}")
print(f"Logistic Regression - Test Accuracy: {test_score_log:.2f}")




#print(cv_results_log)

# Afficher les résultats de validation croisée
#print("Random Forest - Accuracy:", cv_results_foret['test_score'].mean(), "Standard Deviation:", cv_results_foret['test_score'].std())
#print("Naive Bayes - Accuracy:", cv_results_bayes['test_score'].mean(), "Standard Deviation:", cv_results_bayes['test_score'].std())
#print("SVM - Accuracy:", cv_results_svm['test_score'].mean(), "Standard Deviation:", cv_results_svm['test_score'].std())
#print("Logistic Regression - Accuracy:", cv_results_log['test_score'].mean(), "Standard Deviation:", cv_results_log['test_score'].std())

