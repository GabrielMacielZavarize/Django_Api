from rest_framework import serializers
from escola.models import Aluno

class AlunosSerializer(serializers.ModelSerializer):
    class Meta:
        model = Aluno
        fields = ('id','nome','cpf','email',)