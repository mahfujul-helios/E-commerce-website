from rest_framework import serializers
from . models import *
class ProsuctSerializer(serializers.ModelSerializer):
    class Meta:
        model=Product
        fields='__all__'
        
class CartSerializer(serializers.ModelSerializer):
    product_details = serializers.SerializerMethodField()
    class Meta:
        model = Cart
        fields= '__all__'
    

    def get_product_details(self, obj):
        data = {
            'name': obj.product.name,
            'price': obj.product.price
        }
        return data