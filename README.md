# VUE2 ��ѧ��Ŀ

�ӿ��Žӿڽ����Ӱ��Դ����,ʹ��vue-router��vue-resource��vuex�ȹٷ��Ƽ����ȫ�潲��vue˼��

## ����

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8047
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

### ��Ŀ�ص㣺

- ��ѭVUE���Ź淶

- ʹ��vue-router����·����ת��������

- ʹ��vuex����ȫ��״̬��������ʹ��ģ�黯�ṹ��ʹҵ���������

- ʹ��vue-resource�����������

- ���ȫ��ע��

- ʹ��fastclick�Ż��ƶ�������

- ......

  ------

  ### ��Ŀ˵��:

  1. �����

     ��װnodeJs

     ��װgit����

  2. ������Ŀ

     ```javascript
     #  ȫ�ְ�װwebpack
     npm install webpack -g
     # ȫ�ְ�װvue�ٷ����ּ�
     npm install vue-cli -g
     # ��ʼ����Ŀ
     vue init webapck vueExe
     # ����Ŀ¼����װ����
     cd vueExe && npm install
     # ����
     npm start
     ```

  3. �ؼ�����

     ���Լ����������ȫ��ע��:

     ```javascript
     Object.keys(components).forEach((key) => {
     	var name = key.replace(/(\w)/, (v) => v.toUpperCase()) //����ĸ��д
     	Vue.component(`v${name}`, components[key])
     })
     ```

     �����ƶ����¼�:

     ```javascript
     window.addEventListener('load', () =>  FastClick.attach(document.body))
     ```

     ״̬ģ�黯����:

     ```javascript
     export default new Vuex.Store({
       modules: {
         film,
         app
       },
       strict: debug
     })
     ```

     ?

### Something   Missing

ϣ����������ǰ��47������ͬѧǰ���ƽ�,���´�!