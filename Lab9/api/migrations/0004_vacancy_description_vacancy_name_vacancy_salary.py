# Generated by Django 4.1.7 on 2023-04-08 04:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_alter_vacancy_company'),
    ]

    operations = [
        migrations.AddField(
            model_name='vacancy',
            name='description',
            field=models.TextField(blank=True, max_length=1000),
        ),
        migrations.AddField(
            model_name='vacancy',
            name='name',
            field=models.CharField(blank=True, max_length=255),
        ),
        migrations.AddField(
            model_name='vacancy',
            name='salary',
            field=models.FloatField(blank=True, default=1000),
        ),
    ]
