from django.shortcuts import render

""" main page of backend """
def vue(request):
    return render(request, 'base.html')

""" DummyData JSONResponse """
from django.http import JsonResponse
from .models import DummyData

def get_dummy_data(request):
    dummyData = DummyData.objects.all()
    data = [{"title": dummyDataReturn.title, "slug": dummyDataReturn.slug} for dummyDataReturn in dummyData]
    return JsonResponse(data, safe=False)