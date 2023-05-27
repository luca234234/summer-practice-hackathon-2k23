from flask import Blueprint, render_template


main = Blueprint('main', __name__)


@main.route("/")
@main.route("/home")
def home():

    return render_template('main/home.html')


@main.route("/add_key")
def add_key():

    return render_template('main/add_key.html')