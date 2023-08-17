from django.db import models


class Product(models.Model):
    title = models.CharField(max_length=255)
    slug = models.SlugField(max_length=255)
    description = models.TextField()
    image = models.ImageField(upload_to='img/products')

    def __str__(self):
        return self.title
