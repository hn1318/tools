export const codesByCategories: {
  category: string
  codes: {
    code: number
    name: string
    description: string
    type: 'HTTP' | 'WebDav'
  }[]
}[] = [
  {
    category: '1xx 信息性响应',
    codes: [
      {
        code: 100,
        name: '继续',
        description: '等待客户端发送请求体。',
        type: 'HTTP',
      },
      {
        code: 101,
        name: '切换协议',
        description: '服务器已同意切换协议。',
        type: 'HTTP',
      },
      {
        code: 102,
        name: '处理中',
        description: '服务器正在处理请求，但尚未返回响应。',
        type: 'WebDav',
      },
      {
        code: 103,
        name: '早期提示',
        description: '服务器在最终 HTTP 消息之前返回部分响应头。',
        type: 'HTTP',
      },
    ],
  },
  {
    category: '2xx 成功',
    codes: [
      {
        code: 200,
        name: '成功 (OK)',
        description: '成功 HTTP 请求的标准响应。',
        type: 'HTTP',
      },
      {
        code: 201,
        name: '已创建',
        description: '请求已成功处理，并创建了一个新资源。',
        type: 'HTTP',
      },
      {
        code:202,
        name: '已接受',
        description: '请求已被接受处理，但处理尚未完成。',
        type: 'HTTP',
      },
      {
        code: 203,
        name: '非权威信息',
        description: '请求成功，但原始请求内容已被转换代理修改。',
        type: 'HTTP',
      },
      {
        code: 204,
        name: '无内容',
        description: '服务器已成功处理请求，未返回任何内容。',
        type: 'HTTP',
      },
      {
        code: 205,
        name: '重置内容',
        description: '服务器指示重新初始化发送此请求的文档视图。',
        type: 'HTTP',
      },
      {
        code: 206,
        name: '部分内容',
        description: '由于客户端发送了范围（Range）请求头，服务器仅返回资源的一部分。',
        type: 'HTTP',
      },
      {
        code: 207,
        name: '多状态',
        description: '随后的消息体是一个 XML 消息，可包含多个独立的响应码。',
        type: 'WebDav',
      },
      {
        code: 208,
        name: '已报告',
        description: 'DAV 绑定的成员已在（多状态）响应的前面部分中枚举过。',
        type: 'WebDav',
      },
      {
        code: 226,
        name: '已使用 IM',
        description: '服务器已完成对资源的请求，响应是该结果的表示。',
        type: 'HTTP',
      },
    ],
  },
  {
    category: '3xx 重定向',
    codes: [
      {
        code: 300,
        name: '多种选择',
        description: '表示客户端可选择的资源的多个选项。',
        type: 'HTTP',
      },
      {
        code: 301,
        name: '永久移动',
        description: '当前及以后所有请求都应定向到给定的 URI。',
        type: 'HTTP',
      },
      {
        code: 302,
        name: '临时重定向 (Found)',
        description: '重定向到另一个 URL。这是行业实践与标准相冲突的一个例子。',
        type: 'HTTP',
      },
      {
        code: 303,
        name: '查看其它',
        description: '请求的响应可以通过另一个 URI 使用 GET 方法获取。',
        type: 'HTTP',
      },
      {
        code: 304,
        name: '未修改',
        description: '表示自请求头中指定的版本以来，资源未被修改。',
        type: 'HTTP',
      },
      {
        code: 305,
        name: '使用代理',
        description: '所请求的资源仅能通过代理访问，代理地址在响应中提供。',
        type: 'HTTP',
      },
      {
        code: 306,
        name: '切换代理',
        description: '不再使用。最初含义为“后续请求应使用指定的代理”。',
        type: 'HTTP',
      },
      {
        code: 307,
        name: '临时重定向',
        description: '在此情况下应使用另一个 URI 重复请求；但以后的请求仍应使用原始 URI。',
        type: 'HTTP',
      },
      {
        code: 308,
        name: '永久重定向',
        description: '请求及以后所有请求都应使用另一个 URI 重复。',
        type: 'HTTP',
      },
    ],
  },
  {
    category: '4xx 客户端错误',
    codes: [
      {
        code: 400,
        name: '错误请求',
        description: '由于明显的客户端错误，服务器无法或不愿处理该请求。',
        type: 'HTTP',
      },
      {
        code: 401,
        name: '未授权',
        description: '类似于 403 禁止，但专门用于需要身份验证且验证失败或尚未提供的情况。',
        type: 'HTTP',
      },
      {
        code: 402,
        name: '需要付款',
        description: '为将来使用而保留。最初意图是该状态码可能用于某种形式的数字现金或小额支付方案。',
        type: 'HTTP',
      },
      {
        code: 403,
        name: '禁止',
        description: '请求有效，但服务器拒绝执行操作。用户可能不具备访问某资源所需的权限。',
        type: 'HTTP',
      },
      {
        code: 404,
        name: '未找到',
        description: '无法找到所请求的资源，但将来可能可用。',
        type: 'HTTP',
      },
      {
        code: 405,
        name: '方法不允许',
        description: '请求的资源的请求方法不被支持。',
        type: 'HTTP',
      },
      {
        code: 406,
        name: '不可接受',
        description: '根据请求中发送的 Accept 头，所请求的资源只能生成不可接受的内容。',
        type: 'HTTP',
      },
      {
        code: 407,
        name: '需要代理认证',
        description: '客户端必须先通过代理进行身份验证。',
        type: 'HTTP',
      },
      {
        code: 408,
        name: '请求超时',
        description: '服务器等待请求时发生超时。',
        type: 'HTTP',
      },
      {
        code: 409,
        name: '冲突',
        description: '由于请求中的冲突（如编辑冲突），请求无法被处理。',
        type: 'HTTP',
      },
      {
        code: 410,
        name: '已删除',
        description: '表示所请求的资源不再可用，并且将来也不会再可用。',
        type: 'HTTP',
      },
      {
        code: 411,
        name: '需要内容长度',
        description: '请求未指定其内容长度，而该长度是被请求资源所要求的。',
        type: 'HTTP',
      },
      {
        code: 412,
        name: '前提条件失败',
        description: '服务器不满足请求者对该请求设置的前提条件之一。',
        type: 'HTTP',
      },
      {
        code: 413,
        name: '负载过大',
        description: '请求大小超过了服务器愿意或能够处理的范围。',
        type: 'HTTP',
      },
      {
        code: 414,
        name: 'URI 过长',
        description: '提供的 URI 过长，服务器无法处理。',
        type: 'HTTP',
      },
      {
        code: 415,
        name: '不支持的媒体类型',
        description: '请求实体的媒体类型不被服务器或资源支持。',
        type: 'HTTP',
      },
      {
        code: 416,
        name: '请求范围不满足',
        description: '客户端请求了文件的一部分，但服务器无法提供该部分。',
        type: 'HTTP',
      },
      {
        code: 417,
        name: '预期失败',
        description: '服务器无法满足 Expect 请求头字段的要求。',
        type: 'HTTP',
      },
      {
        code: 418,
        name: '我是一个茶壶',
        description: '服务器拒绝用茶壶煮咖啡的尝试。',
        type: 'HTTP',
      },
      {
        code: 421,
        name: '错误定向的请求',
        description: '请求被定向到了一个无法产生响应的服务器。',
        type: 'HTTP',
      },
      {
        code: 422,
        name: '不可处理的实体',
        description: '请求格式正确，但由于语义错误而无法执行。',
        type: 'HTTP',
      },
      {
        code: 423,
        name: '已锁定',
        description: '正在访问的资源已被锁定。',
        type: 'HTTP',
      },
      {
        code: 424,
        name: '依赖失败',
        description: '由于前一个请求失败，导致本次请求失败。',
        type: 'HTTP',
      },
      {
        code: 425,
        name: '过早',
        description: '表示服务器不愿意处理可能重放的请求。',
        type: 'HTTP',
      },
      {
        code: 426,
        name: '需要升级',
        description: '客户端应切换到不同的协议，例如 TLS/1.0。',
        type: 'HTTP',
      },
      {
        code: 428,
        name: '需要前提条件',
        description: '原始服务器要求请求是条件性的。',
        type: 'HTTP',
      },
      {
        code: 429,
        name: '请求过多',
        description: '用户在给定时间内发送了过多请求。',
        type: 'HTTP',
      },
      {
        code: 431,
        name: '请求头字段过大',
        description: '服务器不愿意处理请求，因为单个头字段或所有头字段整体过大。',
        type: 'HTTP',
      },
      {
        code: 451,
        name: '因法律原因不可用',
        description: '服务器运营者收到法律要求，拒绝访问包含所请求资源在内的一组资源。',
        type: 'HTTP',
      },
    ],
  },
  {
    category: '5xx 服务器错误',
    codes: [
      {
        code: 500,
        name: '服务器内部错误',
        description: '当遇到意外情况且无更具体信息时给出的通用错误消息。',
        type: 'HTTP',
      },
      {
        code: 501,
        name: '未实现',
        description: '服务器要么无法识别请求方法，要么缺乏完成请求的能力。',
        type: 'HTTP',
      },
      {
        code: 502,
        name: '网关错误',
        description: '服务器作为网关或代理时，从上游服务器收到了无效响应。',
        type: 'HTTP',
      },
      {
        code: 503,
        name: '服务不可用',
        description: '服务器当前不可用（因为过载或停机维护）。',
        type: 'HTTP',
      },
      {
        code: 504,
        name: '网关超时',
        description: '服务器作为网关或代理时，未能及时从上游服务器收到响应。',
        type: 'HTTP',
      },
      {
        code: 505,
        name: '不支持的 HTTP 版本',
        description: '服务器不支持请求中使用的 HTTP 协议版本。',
        type: 'HTTP',
      },
      {
        code: 506,
        name: '变体也在协商',
        description: '对请求的透明内容协商导致了循环引用。',
        type: 'HTTP',
      },
      {
        code: 507,
        name: '存储空间不足',
        description: '服务器无法存储完成请求所需的表示。',
        type: 'HTTP',
      },
      {
        code: 508,
        name: '检测到循环',
        description: '服务器在处理请求时检测到无限循环。',
        type: 'HTTP',
      },
      {
        code: 510,
        name: '未扩展',
        description: '服务器需要满足请求的进一步扩展。',
        type: 'HTTP',
      },
      {
        code: 511,
        name: '需要网络认证',
        description: '客户端需要进行身份验证才能获得网络访问权限。',
        type: 'HTTP',
      },
    ],
  },
];
