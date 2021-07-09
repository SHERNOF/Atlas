# Atlas
Atlas is a project to create a compendium of equipment locations for use by business that include electronic BOM features as well as a equipment management interface.
The purpose of Atlas is to provide the a group of users "Management" the ability to send out kits of items and then have the recieveing users "User" initiate a "handshake" to confirm their reciept of the kit.
The handshake acts to confirm the reciept of the kit by providing the "Management" with the location of the "User" who submitted the digital BOM and the contents of the digital BOM.

This information will ultimately be displayed to "Management" via a web interface using REACT.js.
The information submitted by the "User" will be stored in a mySQL database and should be submitted by the "User" on reciept of the kit.
For incentive to force the "User" to use Atlas, Atlas will communicate with some other software already in use by "Management" to lock out the use of the sent kit by some means defined by the other software.

## Phase 1 Targets
- "User" gui
- - Kit Selection
- - - Digital BoM of Sent Kits
- - Usual Usage Location (Van Rego / Building)
- - "User" name
- - "User" upload location (From GMaps Location API).
- - - Display State / Suburb location to "User"

- Admin Panel
- - Map View with Pins for each uploaded data point
- - Each uploaded data point colour coded with Validity data
- - - Extra information if a data point is incomplete or has issues
- - Allow modification of Kit lists and kit inclusion (maybe link with a source DB?)
- mySQL DB for stored information
