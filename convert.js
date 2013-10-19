module.exports = {
  // Convert unit from ASCII to HEX
  'unit': function (unit) {
    var units = {
      'A': 0x60,
      'B': 0x70,
      'C': 0x40,
      'D': 0x50,
      'E': 0x80,
      'F': 0x90,
      'G': 0xA0,
      'H': 0xB0,
      'I': 0xE0,
      'J': 0xF0,
      'K': 0xC0,
      'L': 0xD0,
      'M': 0x00,
      'N': 0x10,
      'O': 0x20,
      'P': 0x30
    };

    return units[unit];
  },
  
  // Convert device from ASCII to HEX
  'device': function (device) {
    var devices = {
      '1': 0x00,
      '2': 0x10,
      '3': 0x08,
      '4': 0x18,
      '5': 0x40,
      '6': 0x50,
      '7': 0x48,
      '8': 0x58
    };

    return devices[device];
  }
};