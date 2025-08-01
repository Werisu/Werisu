# Foto de Perfil

Para adicionar sua foto de perfil:

1. **Adicione sua foto nesta pasta** com o nome `profile-photo.jpg`
2. **Formatos suportados**: JPG, PNG, WebP
3. **Tamanho recomendado**: 300x300 pixels ou maior (será redimensionada automaticamente)
4. **Proporção**: Quadrada (1:1) para melhor resultado

## Como funciona

- A foto será exibida em formato circular na seção hero
- Se a foto não for encontrada, será exibido um emoji como fallback
- A foto tem efeitos de hover e animações suaves
- É responsiva e se adapta a diferentes tamanhos de tela

## Estrutura de arquivos

```
src/assets/images/
├── profile-photo.jpg  ← Sua foto aqui
└── README.md
```

## Personalização

Você pode modificar o caminho da imagem no arquivo `src/app/components/home/home.component.html`:

```html
<img src="assets/images/sua-foto.jpg" alt="Seu Nome" class="profile-image" />
```
