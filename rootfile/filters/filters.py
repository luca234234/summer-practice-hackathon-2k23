import os


def cache_bust_filter(app):
    @app.template_filter('cache_bust')
    def cache_bust(file_path):
        root_directory = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
        file_path_absolute = os.path.join(root_directory, file_path.strip('/'))
        version = int(os.path.getmtime(file_path_absolute))

        return f"{file_path}?v={version}"
