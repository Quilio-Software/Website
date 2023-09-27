from django.db import models
import os
from django.db.models.signals import pre_delete
from django.dispatch import receiver


CATEGORY_CHOICES = (
    ('new', 'New'),
    ('deals', 'Deals'),
    ('free', 'Free'),
)


class Product(models.Model):
    title = models.CharField(max_length=255)
    slug = models.SlugField(max_length=255)
    category = models.CharField(
        max_length=10, choices=CATEGORY_CHOICES, default='new')
    description = models.TextField()
    image = models.ImageField(upload_to='img/products', null=True, blank=True)

    def __str__(self):
        return self.title


@receiver(pre_delete, sender=Product)
def delete_product_files(instance, **kwargs):
    # Delete associated image file
    if instance.image:
        if os.path.isfile(instance.image.path):
            os.remove(instance.image.path)


class Audio_Demo(models.Model):
    product = models.ForeignKey(
        'Product', related_name='audio_demo', on_delete=models.CASCADE)
    slug = models.SlugField(max_length=255)
    original_file = models.FileField(
        upload_to='audio/products/original', null=True, blank=True)
    processed_file = models.FileField(
        upload_to='audio/products/processed', null=True, blank=True)

    def __str__(self):
        return self.slug


@receiver(pre_delete, sender=Audio_Demo)
def delete_audio_demo_files(sender, instance, **kwargs):
    # Delete associated audio files
    if instance.original_file:
        if os.path.isfile(instance.original_file.path):
            os.remove(instance.original_file.path)
    if instance.processed_file:
        if os.path.isfile(instance.processed_file.path):
            os.remove(instance.processed_file.path)
