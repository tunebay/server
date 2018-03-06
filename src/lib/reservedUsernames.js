// @flow
const reservedUsernames: Array<string> = [
  'about',
  'account',
  'activate',
  'address',
  'adm',
  'admin',
  'administration',
  'administrator',
  'ads',
  'advertising',
  'alpha',
  'analysis',
  'analytics',
  'anonymous',
  'api',
  'app',
  'apps',
  'archive',
  'archives',
  'article',
  'artists',
  'auth',
  'authentication',
  'avatar',
  'backup',
  'banner',
  'banners',
  'beta',
  'billing',
  'bin',
  'blog',
  'blogs',
  'board',
  'book',
  'bookmark',
  'bot',
  'bots',
  'tunebay',
  'bug',
  'business',
  'calendar',
  'call',
  'campaign',
  'cancel',
  'captcha',
  'career',
  'careers',
  'cart',
  'categories',
  'category',
  'cgi',
  'changelog',
  'chat',
  'check',
  'checking',
  'checkout',
  'client',
  'cliente',
  'clients',
  'code',
  'codereview',
  'collection',
  'collections',
  'comercial',
  'comment',
  'comments',
  'communities',
  'community',
  'company',
  'compare',
  'compras',
  'config',
  'configuration',
  'connect',
  'contact',
  'contact_us',
  'contactus',
  'contest',
  'contribute',
  'corp',
  'create',
  'css',
  'dashboard',
  'data',
  'db',
  'default',
  'delete',
  'demo',
  'design',
  'designer',
  'destroy',
  'dev',
  'devel',
  'developer',
  'developers',
  'diagram',
  'diary',
  'dict',
  'dictionary',
  'die',
  'dir',
  'direct_messages',
  'directory',
  'discover',
  'dist',
  'doc',
  'docs',
  'documentation',
  'domain',
  'download',
  'downloads',
  'ecommerce',
  'edit',
  'editor',
  'edu',
  'education',
  'email',
  'employment',
  'empty',
  'end',
  'enterprise',
  'entries',
  'entry',
  'error',
  'errors',
  'eval',
  'event',
  'exit',
  'explore',
  'facebook',
  'fans',
  'faq',
  'favorite',
  'favorites',
  'feature',
  'features',
  'feed',
  'feedback',
  'feeds',
  'file',
  'files',
  'first',
  'flash',
  'fleet',
  'fleets',
  'flog',
  'follow',
  'followers',
  'following',
  'forgot',
  'form',
  'forum',
  'forums',
  'founder',
  'free',
  'friend',
  'friends',
  'ftp',
  'gadget',
  'gadgets',
  'game',
  'games',
  'get',
  'gift',
  'gifts',
  'gist',
  'github',
  'graph',
  'group',
  'groups',
  'guest',
  'guests',
  'help',
  'home',
  'homepage',
  'host',
  'hosting',
  'hostmaster',
  'hostname',
  'howto',
  'hpg',
  'html',
  'http',
  'httpd',
  'https',
  'i',
  'iamges',
  'icon',
  'icons',
  'id',
  'idea',
  'ideas',
  'image',
  'images',
  'imap',
  'img',
  'index',
  'indice',
  'info',
  'information',
  'inquiry',
  'instagram',
  'intranet',
  'invitations',
  'invite',
  'ipad',
  'iphone',
  'irc',
  'is',
  'issue',
  'issues',
  'it',
  'item',
  'items',
  'java',
  'javascript',
  'job',
  'jobs',
  'join',
  'js',
  'json',
  'jump',
  'knowledgebase',
  'language',
  'languages',
  'last',
  'legal',
  'license',
  'link',
  'links',
  'linux',
  'list',
  'lists',
  'log',
  'log_out',
  'login',
  'logout',
  'logs',
  'm',
  'mac',
  'mail',
  'mail1',
  'mail2',
  'mail3',
  'mail4',
  'mail5',
  'mailer',
  'mailing',
  'maintenance',
  'manager',
  'manual',
  'map',
  'maps',
  'marketing',
  'master',
  'me',
  'media',
  'member',
  'members',
  'message',
  'messages',
  'messenger',
  'microblog',
  'microblogs',
  'mine',
  'mis',
  'mob',
  'mobile',
  'movie',
  'movies',
  'mp3',
  'msg',
  'msn',
  'music',
  'musicas',
  'mx',
  'my',
  'mysql',
  'name',
  'named',
  'nan',
  'navi',
  'navigation',
  'net',
  'network',
  'new',
  'news',
  'newsletter',
  'nick',
  'nickname',
  'notes',
  'noticias',
  'notification',
  'notifications',
  'notify',
  'ns',
  'ns1',
  'ns10',
  'ns2',
  'ns3',
  'ns4',
  'ns5',
  'ns6',
  'ns7',
  'ns8',
  'ns9',
  'null',
  'oauth',
  'oauth_clients',
  'offer',
  'offers',
  'official',
  'old',
  'online',
  'openid',
  'operator',
  'order',
  'orders',
  'organization',
  'organizations',
  'overview',
  'owner',
  'owners',
  'page',
  'pager',
  'pages',
  'panel',
  'password',
  'payment',
  'perl',
  'phone',
  'photo',
  'photoalbum',
  'photos',
  'php',
  'pic',
  'pics',
  'ping',
  'plan',
  'plans',
  'plugin',
  'plugins',
  'policy',
  'pop',
  'pop3',
  'popular',
  'portal',
  'post',
  'postfix',
  'postmaster',
  'posts',
  'pr',
  'premium',
  'press',
  'price',
  'pricing',
  'privacy',
  'privacy_policy',
  'privacypolicy',
  'private',
  'pro',
  'product',
  'products',
  'profile',
  'project',
  'projects',
  'promo',
  'pub',
  'public',
  'purpose',
  'put',
  'python',
  'query',
  'random',
  'ranking',
  'read',
  'readme',
  'recent',
  'recruit',
  'recruitment',
  'signup',
  'registration',
  'release',
  'remove',
  'replies',
  'report',
  'reports',
  'repositories',
  'repository',
  'req',
  'request',
  'requests',
  'reset',
  'roc',
  'root',
  'rss',
  'ruby',
  'rule',
  'sag',
  'sale',
  'sales',
  'sample',
  'samples',
  'save',
  'school',
  'script',
  'scripts',
  'search',
  'secure',
  'security',
  'self',
  'send',
  'server',
  'service',
  'services',
  'session',
  'sessions',
  'setting',
  'settings',
  'setup',
  'share',
  'shop',
  'show',
  'sign_in',
  'sign_up',
  'signin',
  'signout',
  'signup',
  'sitemap',
  'smartphone',
  'soporte',
  'spec',
  'sql',
  'src',
  'ssh',
  'ssl',
  'ssladmin',
  'ssladministrator',
  'sslwebmaster',
  'staff',
  'stage',
  'staging',
  'start',
  'stat',
  'state',
  'static',
  'stats',
  'statistics',
  'status',
  'styleguide',
  'stylesheet',
  'stylesheets',
  'subdomain',
  'subscribe',
  'subscriptions',
  'suporte',
  'support',
  'sysadmin',
  'sysadministrator',
  'tag',
  'talk',
  'task',
  'tasks',
  'team',
  'teams',
  'tech',
  'telnet',
  'term',
  'terms',
  'terms_of_service',
  'termsofservice',
  'test',
  'test1',
  'test2',
  'test3',
  'teste',
  'testing',
  'tests',
  'themes',
  'thread',
  'threads',
  'tmp',
  'todo',
  'tool',
  'tools',
  'top',
  'topic',
  'topics',
  'tos',
  'tour',
  'trends',
  'tutorial',
  'tv',
  'twitter',
  'undef',
  'unfollow',
  'unsubscribe',
  'update',
  'upload',
  'uploads',
  'url',
  'usage',
  'user',
  'username',
  'users',
  'usuario',
  'vendas',
  'ver',
  'version',
  'video',
  'videos',
  'visitor',
  'watch',
  'web',
  'webmail',
  'webmaster',
  'website',
  'websites',
  'welcome',
  'who_to_follow',
  'widget',
  'widgets',
  'wiki',
  'word',
  'works',
  'workshop',
  'ww',
  'wws',
  'www',
  'www1',
  'www2',
  'www3',
  'www4',
  'www5',
  'www6',
  'www7',
  'wwws',
  'wwww',
  'yml',
  'you',
  'yourdomain',
  'yourname',
  'yoursite',
  'yourusername',
];

export default reservedUsernames;
