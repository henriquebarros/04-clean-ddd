/**
 * Make some property optional on type
 *
 * @example
 * ```typescript
 * type Post {
 *  id: string;
 *  name: string;
 *  email: string;
 * }
 *
 * Optional<Post, 'id' | 'email'>
 * ```
 **/

export type Optional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>

/**
 * 
ChatGPT
Este código TypeScript define um tipo genérico chamado Optional. Aqui está a explicação linha por linha:

type Optional<T, K extends keyof T>: Isso define um tipo genérico chamado Optional com dois parâmetros genéricos.

T é o tipo base para o qual você deseja criar propriedades opcionais.
K extends keyof T limita K para ser uma chave válida de T. Isso significa que K só pode ser uma chave existente em T.
Pick<Partial<T>, K>: Isso usa a função genérica Pick para criar um novo tipo que contém apenas as propriedades de T que são especificadas por K.

Partial<T> cria um tipo onde todas as propriedades de T são tornadas opcionais. Isso significa que cada propriedade de T pode ou não estar presente no tipo resultante.
Pick<Partial<T>, K> então seleciona apenas as propriedades especificadas por K (as chaves de T).
&: Isso é uma interseção de tipos, combinando múltiplos tipos em um único tipo. No caso deste código, ele combina dois tipos.

Omit<T, K>: Isso cria um tipo que exclui as propriedades especificadas por K de T.

Omit<T, K> remove as propriedades de T que são especificadas por K, deixando apenas as propriedades que não são especificadas por K.
Em resumo, este código define um tipo genérico chamado Optional que cria um novo tipo com algumas propriedades opcionais (definidas por K) e outras propriedades permanecendo obrigatórias (as que não estão em K). Isso é útil quando você deseja criar tipos onde algumas propriedades são opcionais enquanto outras permanecem obrigatórias.
 */
