from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
  return render_template("index.html", title="seori")

@app.route('/about')
def about():
  return render_template("about.html", title="seori")

@app.route('/luke')
def luke():
  return render_template("luke.html", title="luke electric")

@app.route('/cashmaundy')
def cashmaundy():
  return render_template("cashmaundy.html", title="cash maundy")

@app.route('/maybe')
def maybe():
  return render_template("maybe.html", title="maybe it's nyc")

@app.route('/sweetdigs')
def sweetdigs():
  return render_template("sweetdigs.html", title="sweet digs")

@app.route('/sweetdigsgame')
def sweetdigsgame():
  return render_template("sweetdigsgame.html", title="sweet digs")

@app.route('/codingismagic')
def codingismagic():
  return render_template("codingismagic.html", title="coding is magic")

@app.route('/rocksforshale')
def rocksforshale():
  return render_template("rocksforshale.html", title="rocks for shale")

@app.route('/thoughtsandprayers')
def thoughtsandprayers():
  return render_template("thoughtsandprayers.html", title="thoughts and prayers")

@app.route('/turningoffthescreen')
def turningoffthescreen():
  return render_template("turningoffthescreen.html", title="turning off the screen")

@app.route('/kulak')
def kulak():
  return render_template("kulak.html", title ="kulak")



if __name__ == "__main__":
    app.run(debug=True)