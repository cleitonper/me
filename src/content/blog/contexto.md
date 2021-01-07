---
title: Contexto, o que é isso?
image: ../../../static/img/posts/you-got-this.jpg
subtitle: >-
  Vamos entender melhor qual o significado da palavra reservada this
  e quais valores esse ponteiro pode assumir em diferentes contextos
  de execução.
date: '2020-02-25T01:00:00.000Z'
---
Neste artigo vamos falar um pouco sobre contexto no javascript, e como funciona a palavra reservada `this`.

### Afinal, o que é isso?

A palavra reservada `this` é um ponteiro que referencia outro valor na memória dentro do processo que executa o `javascript`.

A seguir vamos destrinchar melhor o que isso quer dizer.

### Contextos de Execução

Existem dois tipos de contexto de execução na linguagem: **global** e **local**. O valor da palavra reservada `this` muda de acordo com o contexto de onde ela é chamada.

#### Contexto Global

Qunado fora de qualquer função ou objeto, `this` aponta para o objeto global do ambiente em que o _javascript_ está sendo executado. No caso dos _browsers_ esse objeto é o [`window`](https://developer.mozilla.org/pt-BR/docs/Web/API/Window "Javascript - Objeto Window"), já no _Node_ ele aponta para o objeto [`global`](https://nodejs.org/api/globals.html#globals_global "Node - Objeto Global").

No console do seu navegador, faça o seguinte teste:

```javascript
console.log(this === window);

// o comando acima irá exibir true
```

O mesmo pode ser feito ao executar o _Node_ em um terminal:

```javascript
console.log(this === global);

// o comando acima irá exibir true
```

#### Contexto Local

Além do escopo global, `this` pode ser chamado de dentro de uma função, e dependendo de como a função é chamada seu valor muda.

##### Como método de um objeto

Para o exeplo a seguir, `this` assume o valor do objeto em que está sendo executado.


```javascript
const obj = {
  whatsIsThis: function() {
    console.log(this);
  }
};

// irá exibir obj

```

##### Em uma função construtora

Funções construturas criam _automagicamente_ um _objeto_ no momento em que são instanciadas. Neste caso, `this` aponta para esse objeto.

```javascript

function Obj() {
  this.name = 'Construtora';
  this.whatIsThis = function() {
    console.log(this);
  };
}

const obj = new Obj();
obj.whatIsThis();

/**
 * O método acima irá exibir um objeto
 * contendo as chaves name e whatIsThis
 */
```

**Leitura recomendada**
  - [this - Javascript | MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/this)



Até a próxima ✌️