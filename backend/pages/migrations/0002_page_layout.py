# Generated by Django 2.0.2 on 2018-07-30 21:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pages', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='page',
            name='layout',
            field=models.IntegerField(default=0),
        ),
    ]