from rest_framework import serializers

from .models import Vid, Tip, Rezept

class VidSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Vid
        fields = ('name', 'id',)

class TipSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Tip
        fields = ('name', 'id',)

class RezeptSerializer(serializers.HyperlinkedModelSerializer):
    
    vid = serializers.SlugRelatedField(slug_field='name', queryset=Vid.objects) #мы будем искать объект Vid по всем записям, 
    # поэтому передадим Vid.objects.all(). Но можно сократить его до Town.objects, потому что all() будет вызван под капотом.
    tip = serializers.SlugRelatedField(slug_field='name', queryset=Tip.objects)
    class Meta:
        model = Rezept
        fields = ('name', 'vid', 'tip', 'ingredients', 'rezept', 'id',)

    

