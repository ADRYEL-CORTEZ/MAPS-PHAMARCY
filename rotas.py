from flask import Flask, render_template

site = Flask (__name__)

@site.route ('/')
def homepage ():
    return render_template('homepage.html')

@site.route ('/formulario')
def formulario ():
    return render_template('formulario.html')

@site.route ('/cadastro')
def cadastro ():
    return render_template('cadastro.html')

@site.route ('/login')
def login ():
    return render_template('login.html')

@site.route ('/perfil')
def perfil ():
    return render_template('perfil.html')

@site.route ('/Sobre')
def Sobre ():
    return render_template('Sobre.html')

@site.route ('/historico')
def historico ():
    return render_template('historico.html')



if __name__== '__main__':
    site.run(debug=True)

    