import flask
from flask import Flask,render_template

app=Flask(__name__)

@app.route("/bootstrap")
def hello():
    return render_template("w3.html")

app.run(debug=True)
