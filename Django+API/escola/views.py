from rest_framework import viewsets
from escola.models import Aluno
from escola.serializer import AlunosSerializer
from django.contrib.auth import authenticate
from rest_framework.response import Response
from rest_framework.decorators import api_view
        
class AlunoViewSet(viewsets.ModelViewSet):
    queryset = Aluno.objects.all()
    serializer_class = AlunosSerializer
    @api_view(['POST'])
    def login_view(request):
        name = request.data.get('nome')
        cpf = request.data.get('cpf')
        email = request.data.get('email')

        user = authenticate(request, nome=name, cpf=cpf, email = email)

        if user is not None: 
            return Response({'message': 'Login bem-sucedido!'})
        else:
            
            return Response({'message': 'Credenciais inválidas.'}, status=400)
    

