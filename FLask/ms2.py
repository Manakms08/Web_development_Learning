import flask
from flask import Flask,render_template

app = Flask(__name__)


@app.route("/")
def hello():
    name="Manak"
    return render_template('index.html',name= name)

app.run(debug=True)                                    