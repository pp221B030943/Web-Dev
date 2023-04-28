from asyncore import read
from dataclasses import fields
from rest_framework import serializers
from api.models import*

class CategorySerializer(serializers.Serializer):
    id = serializers.IntegerField()
    name = serializers.CharField()
    

    def create(self, validated_data):
        category= Category.objects.create(**validated_data)
        return category

    def update(self, instance, validated_data):
        instance.name = validated_data.get("name")
        instance.save()
        return instance
        
    
class CategorySerializer_2(serializers.ModelSerializer):
    proudcts = serializers.PrimaryKeyRelatedField(many=True, read_only=True)

    class Meta:
        model = Category
        fields = ('id', 'name', 'products')


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ('id', 'name', 'rating', 'description', 'price', 'category',) 


class FeedbackSerializer(serializers.ModelSerializer):
    class Meta:
        model = Feedback
        fields = ('id', 'body', 'product')


class ShippingSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    type = serializers.CharField()
    price = serializers.FloatField()

    def create(self, validated_data):
        shipping = Shipping.objects.create(**validated_data)
        return shipping

    def update(self, instance, validated_data):
        instance.type = validated_data.get('type', instance.type)
        instance.price = validated_data.get('price', instance.price)
        instance.save()
        return instance
