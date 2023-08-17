from django.shortcuts import render

# Create your views here.
from django.http import JsonResponse
from .models import Product


def get_products(request):
    products = Product.objects.all()
    data = [{"title": product.title, "slug": product.slug, "description": product.description, "image": product.image.url}
            for product in products]
    return JsonResponse(data, safe=False)
