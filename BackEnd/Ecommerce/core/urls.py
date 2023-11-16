from django.urls import path
from . views import ProductList,ProductDetails,AddToCart
urlpatterns = [
    path('pro/', ProductList.as_view(), name="products"), 
    path('pro/<int:id>/', ProductDetails.as_view(), name="productDetails"), 
    path('proCart/', AddToCart.as_view(), name="addToCart")
]
