from django.db import models

class Album(models.Model):
    title = models.CharField(max_length=255)
    summary = models.TextField()
    image = models.CharField(max_length=255)
    link = models.CharField(max_length=255, null=True)

    def __str__(self):
        return self.title