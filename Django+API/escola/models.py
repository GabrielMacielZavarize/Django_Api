from django.db import models

class Aluno(models.Model):
    nome = models.CharField( max_length=100)
    cpf = models.BigIntegerField(max_length=11)
    email = models.EmailField(max_length=100)

    def __str__(self):
        return self.nome

