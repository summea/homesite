from django.db import models

class Layout(models.Model):
    name = models.CharField(max_length=255)
    body = models.TextField()

    def __str__(self):
        return self.name
