# Generated by Django 4.1.2 on 2022-10-25 07:45

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Tip',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=30, unique=True)),
            ],
        ),
        migrations.CreateModel(
            name='Vid',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=30, unique=True)),
            ],
        ),
        migrations.CreateModel(
            name='Rezept',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=30)),
                ('ingredients', models.TextField(default='')),
                ('rezept', models.TextField(default='')),
                ('tip', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='rezept.tip')),
                ('vid', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='rezept.vid')),
            ],
        ),
    ]