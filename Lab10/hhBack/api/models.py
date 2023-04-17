from django.db import models

# Create your models here.

class Company(models.Model):
    name = models.CharField(max_length=255, blank=True)
    description = models.TextField(max_length=1000, blank=True)
    city = models.CharField(max_length=255, blank=True)
    address = models.TextField(max_length=1000, blank=True)

    class Meta:
        verbose_name = 'Company'
        verbose_name_plural = 'Companies'

    # def __str__(self):
    #     return f'{self.id}: {self.name}, {self.city}, {self.address}'
    

    def to_json(self):
        return{
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'city':self.city,
            'address': self.address
        }

class Vacancy(models.Model):
    name = models.CharField(max_length=255, blank=True)
    description = models.TextField(max_length=1000, blank=True)
    salary = models.FloatField(default = 1000, blank=True)
    company = models.ForeignKey('Company', on_delete = models.CASCADE, default=0, blank=True)

    class Meta:
        verbose_name = 'Vacancy'
        verbose_name_plural = 'Vacancies'

    # def __str__(self):
    #     return f'{self.id}: {self.name}, {self.salary}, {self.company}'

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'salary': self.salary,
            'company': self.company.id
        }