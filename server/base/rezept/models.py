from django.db import models


class Vid(models.Model):
    name = models.CharField(max_length=30, unique=True)

    def __str__(self):
        return f'{self.name}'

class Tip(models.Model):
    name = models.CharField(max_length=30, unique=True)

    def __str__(self):
        return f'{self.name}'        

class Rezept(models.Model):
    name = models.CharField(max_length=30)
    vid = models.ForeignKey(Vid, on_delete = models.CASCADE)
    tip = models.ForeignKey(Tip, on_delete = models.CASCADE)
    ingredients = models.TextField(default ='')
    rezept = models.TextField(default ='')

    def __str__(self):
        return f"Название- {self.name[0:10]}{'...'} Вид- {self.vid} Тип- {self.tip} Рецепт- {self.rezept[0:30]}{'...'}"