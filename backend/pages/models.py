from django.db import models
from layouts.models import Layout

class Page(models.Model):
    name = models.CharField(max_length=255)
    body = models.TextField()
    layout = models.OneToOneField(Layout, on_delete=models.CASCADE)

    def __str__(self):
        return self.name
