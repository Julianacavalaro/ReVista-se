import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  usuario: Usuario = new Usuario()
  senha!: string

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
  }

  capturarSenha(event: any) {
    this.senha = event.target.value
  }

  cadastrar() {
    console.log(this.senha, this.usuario.senha)
    if (this.senha === this.usuario.senha) {

      this.authService.cadastrar(this.usuario).subscribe((resp) => {
        this.usuario = resp
      })

      this.router.navigate(['/login'])
      
      alert('Usuário cadastrado com sucesso!')
    } else {
      alert('Suas senhas não conferem')
    }
  }
}
