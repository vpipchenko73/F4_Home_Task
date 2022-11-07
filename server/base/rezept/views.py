# from django.shortcuts import render
from rest_framework import viewsets

from .serializers import  TipSerializer, VidSerializer, RezeptSerializer
from .models import  Tip, Vid, Rezept

class TipViewSet(viewsets.ModelViewSet):
    queryset = Tip.objects.all().order_by('name')
    serializer_class = TipSerializer

class VidViewSet(viewsets.ModelViewSet):
    queryset = Vid.objects.all().order_by('name')
    serializer_class = VidSerializer

class RezeptViewSet(viewsets.ModelViewSet):
    queryset = Rezept.objects.all().order_by('name')
    serializer_class = RezeptSerializer


