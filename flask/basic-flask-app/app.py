from flask import Flask, render_template

app = Flask(__name__)


@app.route('/')
def main():
    return render_template("landing_page.html")


if __name__ == '__main__':
    app.run()
    # app.run(debug=True)
    # dont have to restart server after each change, for development mode
