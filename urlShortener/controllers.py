from flask import render_template, redirect, request, flash, session

# render home page
def home():
    return render_template('index.html')