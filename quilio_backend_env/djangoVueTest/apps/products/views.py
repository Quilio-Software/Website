from django.http import JsonResponse
from .models import Product
from django.core.exceptions import ObjectDoesNotExist  # Import the exception
import logging

logger = logging.getLogger(__name__)  # logger instance


def get_products_by_category(request, category):
    products = Product.objects.filter(category=category)
    data = []

    for product in products:
        product_data = {
            "title": product.title,
            "slug": product.slug,
            "description": product.description,
            "image": product.image.url,
            "audio_demo": []
        }

        try:
            audio_demo = product.audio_demo.all()
            for audio_file in audio_demo:
                audio_data = {
                    "original_file": audio_file.original_file.url,
                    "processed_file": audio_file.processed_file.url
                }
                product_data["audio_demo"].append(audio_data)
        except ObjectDoesNotExist:
            logger.error(
                "No associated audio demo for product:", product.title)

        data.append(product_data)

    return JsonResponse(data, safe=False)
