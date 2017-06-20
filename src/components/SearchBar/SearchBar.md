SearchBar example:
```
    <SearchBar
      onChange={() => console.log('onChange')}
      onRequestSearch={() => console.log('onRequestSearch')}
      style={{
        margin: '0 auto',
        maxWidth: 800
      }}
    />
```

SearchBar AutoComplete example:
```
    <SearchBar
      dataSource={state.dataSource}
      onChange={(value) => setState({dataSource: [ value, value+value, value+value+value]})}
      onRequestSearch={() => console.log('onRequestSearch')}
      style={{
        margin: '0 auto',
        maxWidth: 800
      }}
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
