---
title: 'REST: Introdução à Arquitetura'
image: ../../../static/img/posts/rest__introducao.png
subtitle: |
  Nesta introdução ao estilo arquitetural REST, falaremos sobre
  os benefícios do seu uso, quais restrições o padrão introduz
  e os elementos que compõem a arquitetura.
date: '2020-06-22T01:00:00.000Z'
---
Transferência Representacional de Estado, em inglês Representational State Transfer (REST),
é um estilo arquitetural introduzido por Roy Thomas Fielding no ano 2000 em sua tese de doutorado
[Architectural Styles and the Design of Network-based Software Architectures](https://www.ics.uci.edu/~fielding/pubs/dissertation/top.htm).

Este artigo tem o objetivo de fornecer uma introdução teórica sobre o padrão REST,
portanto, não será abordado aqui como o implementa-lo em uma linguagem ou framework específicos,
sendo este um tópico para uma postagem futura.

Ao final da leitura você será capaz de responder as seguintes perguntas:

  - Quais os benefícios da adoção do padrão REST?
  - Quais restrições esse padrão reforça?
  - Quais os elementos que compõem essa arquitetura?


### Beneficios

Antes de falarmos sobre REST, é importante entendermos quais os benefícios do seu uso.
Isso permitirá absorver com maior facilidade o conteúdo que será abordado, pois, entendendo
quais são os benefícios do uso de um padrão, nos tornamos mais abertos a sua adoção.

A seguir são listados alguns dos benefícios do estilo arquitetural REST:

  - **Separação entre interface de usuário e dados** - a separação da interface de usuário (*frontend*) da
  camada de manipulação de dados (*backend*) permite que essas duas partes de uma aplicação evoluam de forma
  independente. Além disso, por conta da camada de dados não estar acoplada a interface de usuário, é possível que
  um único *backend* sirva como fonte de dados para multiplos *frontends*.
  - **Interface uniforme** - O uso de padrões para nomenclatura e acesso a *recursos* facilita a navegabilidade em
  um serviço que implementa a arquitetura REST. 
  - **_Cacheavel_** - Requisições do *cliente* para o *servidor* devem conter toda informação necessária para executar
  uma chamada. Isso quer dizer que requisições em serviços REST não devem possuir estado, o que facilita a 
  implementação de mecanismos de cache.


### Restrições

REST pode ser descrita como um estilo arquitetural que consiste num conjunto
de restrições aplicadas aos elementos que compõem a arquitetura.

Nas próximas seções serão abordadas as restrições que são impostas pela arquitetura.


#### Cliente-Servidor

A primeira restrição adicionada ao padrão REST é a adoção da arquitetura Cliente-Servidor.
A separação de responsabilidades é principio mais importante por trás da arquitetura cliente-servidor,
e isso também é adotado pela arquitetura REST. 

Ao separar a interface de usuário (*cliente*) da camada de manipulação de dados (*servidor*),
melhoramos a portabilidade da interface de usuário para multiplas plataformas e melhoramos a
escalabilidade simplificando os componentes do servidor. Uma vez separadas essas duas camadas,
é possível evolui-las de forma independente, atendendo suas necessidades com ferramentas
especificas para cada caso de uso.


#### Stateless

A interação entre cliente e servidor não deve ter estado. Cada requisição deve conter toda informação necessária
para ser executada, não usando recursos de requisições anteriores, como sessão e histórico. Informações que compõem
o *estado* atual da aplicação devem ser armazenadas no *cliente* e enviadas para o *servidor* quando necessário.

Essa restrição melhora as propriedades de visibilidade e escalabilidade. Melhora a visibilidade
porque um sistema de monitoramento não precisa olhar além dos dados que estão contidos na requisição.
A escalabilidade é aprimorada porque não tendo que armazenar o estado entre as requisições permite
que o servidor libere recursos rapidamente.


#### Cache

As restrições de cache exigem que os dados em uma resposta a uma requisição sejam rotulados implícita
ou explicitamente como armazenáveis ou não armazenáveis em cache. Se uma resposta puder ser armazenada em cache,
o cache do cliente terá o direito de reutilizar os dados de resposta para solicitações equivalentes posteriores.

A vantagem de adicionar mecanismos de cache é que algumas interações com o servidor podem ser completamente eliminadas,
melhorando a eficiência, escalabilidade e performace percebida pelo usuário.


#### Sistema em camadas

O estilo de sistema em camadas permite que uma arquitetura seja composta de camadas hierárquicas,
restringindo o comportamento do componente de forma que cada componente não possa "ver" além da
camada imediata com a qual está interagindo. Ao restringir o conhecimento do sistema a uma única camada,
colocamos um limite na complexidade geral do sistema.

Camadas podem ser usadas para encapsular serviços legados e proteger novos serviços de clientes legados.


#### Interface uniforme

Para obter uma interface uniforme, algumas restrições são necessárias para facilitar a identificação de recursos.
REST é definido por quatro restrições de interface: identificação de recursos; manipulação de recursos por meio de
representações; mensagens autodescritivas; e hipermídia como motor de estado do aplicativo. Cada uma dessas restrições
será abordada nessa postagem.

Uma interface uniforme simplifica uma das principais funções de um servidor: mapear identificadores a recursos.


### Elementos

REST é uma abstração de elementos arquiteturais em sistemas distribuídos. O estilo
ignora detalhes de implementação de componentes e sintaxe de protocolos para focar nos papéis
dos componentes e suas interações.

A seguir, os elementos arquiteturas REST serão detalhados.


#### Conectores

| Conector        | Descrição                                                                                   | Exemplo                           |
|-----------------|---------------------------------------------------------------------------------------------|-----------------------------------|
| Cliente         | Envia requisições e recebe respostas                                                        | Biblioteca HTTP                   |
| Servidor        | Recebe requisições e envia respostas                                                        | Servidor Web                      |
| Cache           | Pode estar localizado no cliente ou servidor para salvar respostas armazenáveis em cache    | Cache do navegador                |
| Resolver        | Transforma identificadores de recurso em endereços de rede                                  | Bibliotecas para resolução de DNS |
| Túnel           | Pedidos de retransmissão. Componentes podem seu comportamento para o comportamento de túnel | SSL/TLS                           |


#### Elementos de dados

| Elemento de dados          | Descrição                                                    | Exemplo                                            |
|----------------------------|--------------------------------------------------------------|----------------------------------------------------|
| Recurso                    | Qualquer informação que pode ser nomeada é um recurso        | Imagem, Vídeo, Filme, Produto                      |
| Identificador de recurso   | Conjunto de simbolos usados para identificar um recurso      | URI                                                |
| Representação              | Representação de um recurso                                  | Sequencia de bytes, Documento HTML, JSON, XML      |
| Metadados da representação | Informações sobre uma representação                          | HTTP Headers: `Content-Type`, `Last-Modified`      |
| Metadados do recurso       | Informações sobre um recurso                                 | Link do recurso ou de recursos relacionados        |
| Dados de controle          | Ultima modificação, controle de cache                        | HTTP Headers: `If-Modified-Since`, `Cache-Control` |

#### Componentes

| Componente                 | Descrição                                                                                                           | Exemplo                                            |
|----------------------------|---------------------------------------------------------------------------------------------------------------------|----------------------------------------------------|
| Origin Server              | Usa um conector de servidor para receber a solicitação e é a fonte definitiva para representações de seus recursos. | Servidor Apache, Microsoft IIS, Nginx              |
| User Agent                 | Usa um conector de cliente para iniciar uma solicitação e se torna o destinatário final da resposta.                | Navegadores como Chrome, Firefox e Edge            |
| Gateway                    | Atua como cliente e servidor para encaminhar solicitações e respostas.                                              | Proxy Reverso                                      |
| Proxy                      |                                                                                                                     |                                                    |


### Créditos 

Esta é uma tradução/adaptação/simplificação do artigo de Roy Thomas citado no inicio da postagem.
Os créditos do conteúdo aqui reproduzido são do autor. Para acessar o artigo original,
[clique aqui](https://www.ics.uci.edu/~fielding/pubs/dissertation/rest_arch_style.htm#sec_5_2).
