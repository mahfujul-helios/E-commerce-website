from django.shortcuts import render
from rest_framework import generics
from . models import Product,Cart
from . serializer import ProsuctSerializer,CartSerializer
# Create your views here.
class ProductList(generics.ListCreateAPIView):
    queryset= Product.objects.all()
    serializer_class= ProsuctSerializer

class ProductDetails(generics.RetrieveUpdateDestroyAPIView):
       queryset= Product.objects.all()
       serializer_class = ProsuctSerializer
       lookup_field = 'id'

class AddToCart(generics.ListCreateAPIView):
      queryset=Cart.objects.all()
      serializer_class=CartSerializer