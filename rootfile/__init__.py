from flask import Flask
from rootfile.config import Config
from rootfile.filters.filters import cache_bust_filter



def create_app(config_class=Config):
    app = Flask(__name__)
    app.config.from_object(config_class)
    cache_bust_filter(app)

    from rootfile.main.routes import main

    app.register_blueprint(main)

    return app