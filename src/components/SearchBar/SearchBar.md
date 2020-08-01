SearchBar example:

```
    <SearchBar
      onChange={() => console.log('onChange')}
      onRequestSearch={() => console.log('onRequestSearch')}
      style={{
        margin: '0 auto',
        maxWidth: 800
      }}
      cancelOnEscape
    />
```

SearchBar Disabled example:

```
    <SearchBar
       onChange={() => console.log('onChange')}
       onRequestSearch={() => console.log('onRequestSearch')}
       style={{
         margin: '0 auto',
         maxWidth: 800
       }}
       disabled
     />
```

Blur on search:

```
    let ref = React.createRef();

    <SearchBar
      innerRef={ref}
      onChange={() => console.log('onChange')}
      onRequestSearch={() => {
        ref.current.blur()
        console.log('onRequestSearch')
      }}
      style={{
        margin: '0 auto',
        maxWidth: 800
      }}
    />
```
