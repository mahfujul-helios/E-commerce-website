from django.contrib import admin
from . models import Product, Cart
# Register your models here.
@admin.register(Product)
class ProInfo(admin.ModelAdmin):
    list_display=['id','name','price','image']


@admin.register(Cart)
class CartInfo(admin.ModelAdmin):
    list_display=['id','product','quantity']    