# Django Blog
[![](https://img.shields.io/pypi/pyversions/Django.svg)](https://python.org/downloads/)
[![](https://img.shields.io/badge/django-2.0%20%7C%202.1%20%7C%202.2-success.svg)](https://djangoproject.com/)
[![](https://img.shields.io/apm/l/vim-mode.svg)](https://choosealicense.com/licenses/mit/)

Full-Featured Blog with Django web framework and Machine learning Model.

Screenshots
=
<img src="screenshots/index.png" width=400><img src="screenshots/login.png" width=400>
<img src="screenshots/profile.png" width=400><img src="screenshots/new_post.png" width=400>
<img src="screenshots/post.png" width=400><img src="screenshots/delete.png" width=400>

Features 
=
- User Registration
- User Login & Logout
- User Profile
- Create, Update, Edit & Delete Posts
- Comments
- Comments filtering based on toxicity and spam.
- Search
- User Change Password
- Password Reset


How To Use
=
## Clone project & Install Requirements
> Make sure you have already installed python3 and git.
> We use anaconda environment for run the machine learning model.
> You can install Anaconda or just install those package only.
```
$ git clone https://github.com/pubuser7/django-blog.git && cd django-blog
$ pip install -r requirements.txt
```
## Migrate & Collect Static
```
$ cd src && python manage.py migrate
$ python manage.py collectstatic
```
## Create Admin User
```
$ python manage.py createsuperuser
```
## Run Server
```
$ python manage.py runserver
```
> Enter your browser http://localhost:8000/. You can login via admin in http://localhost:8000/admin/.


TODOS
=
- Change Style
- More Options For New Post
- Blog Archive
- Reply comment
- Delete Comment
- Create following system
- Read later post
- ...
