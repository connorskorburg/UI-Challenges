from flask import render_template, redirect, request, flash, session
import requests


# render home page
def home():
    return render_template('index.html')