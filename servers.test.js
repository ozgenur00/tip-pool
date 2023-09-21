describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should update the server table on submitServerInfo()', function () {
    submitServerInfo();

    let tableRows = serverTbody.querySelectorAll('tr');
    expect(tableRows.length).toEqual(1);

    let firstRow = tableRows[0];
    expect(firstRow.getAttribute('id')).toEqual('server1');
    expect(firstRow.cells[0].textContent).toEqual('Alice');
  });

  
  it('should update the server table when allServers is empty', function () {
    allServers = {};
    updateServerTable();

    let tableRows = serverTbody.querySelectorAll('tr');
    expect(tableRows.length).toEqual(0);
  });

  afterEach(function() {
    // teardown logic
    serverId = 0;
    serverTbody.innerHtml = '';
    allServers = {};
  });
});


