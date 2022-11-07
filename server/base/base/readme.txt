Для решения проблем с CORS  устанавливаем pip install django-cors-headers

в setting добавляем 

################################################################################################

INSTALLED_APPS = [
    ....
    'corsheaders', # добавляем для решения проблем с CORS
    ....
]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'corsheaders.middleware.CorsMiddleware', # добавляем именно здесь для решения проблем с CORS
    ....
]

....

CORS_ORIGIN_ALLOW_ALL = True # добавляем для решения проблем с CORS

################################################################################