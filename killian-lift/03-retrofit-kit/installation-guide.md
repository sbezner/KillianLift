# Killian Smart Kit - Installation Guide

For SKU **KSK-R250** (Sumner Roust-A-Bout R-250 retrofit). Other SKUs follow the same pattern with model-specific brackets and gear ratios.

**Time to install: 30 minutes for a first-time installer, 15 minutes thereafter.**
**Tools required: 4 mm hex key, 5 mm hex key, 13 mm wrench, Phillips #2 screwdriver. Provided in the box.**

## Before You Start

1. Place the lift on a level surface with the mast lowered to its bottom position.
2. Remove any load from the fork.
3. Remove the FlexVolt or M18 battery from any other tool you may have set down (you'll need one for the function test).
4. Read this entire guide before beginning. The video version (5 min) is at the QR code on the kit box, or at killianlift.com/install.

## What's in the Box

- Motor + gearbox assembly
- Mounting bracket (powder-coated black)
- Battery sled (FlexVolt or M18 depending on what you ordered)
- Control box (gray aluminum case)
- Pendant + 12 ft coiled cable
- Load cell shear-pin (orange end caps)
- Wiring harnesses (red = battery, gray = motor, green = pendant, yellow = sensors)
- Hardware kit in a labeled bag
- This guide

## Step 1: Remove the OEM Hand Crank (3 minutes)

The R-250 has a hand crank handle attached to the load winch via a square shaft and a retaining clip.

1. Find the load winch on the front of the mast. The hand crank handle protrudes to the operator's left.
2. Locate the retaining clip on the inboard side of the handle. It's a hairpin-style clip.
3. Pull the clip out. Slide the handle off the square shaft.
4. Set the handle aside. **Save this part.** You will keep it as a backup in case you ever want to revert to OEM operation.

## Step 2: Install the Mounting Bracket (5 minutes)

The mounting bracket goes onto the four existing M8 threaded holes on the mast saddle (where the OEM crank handle saddle was bolted).

1. Locate the four existing M8 holes on the front face of the mast saddle.
2. Place the bracket flat against the saddle, oriented with the larger flat face up (battery sled mounts to this face).
3. Insert four M10 socket head cap screws (provided, blue Loctite already applied to threads) through the bracket into the M8 holes.
4. **Note:** The bracket's holes are M10 to allow for slop and easy alignment; the M8 stock threads accept the M10 SHCS via the supplied 8-to-10 mm step adapters in the hardware kit. Use the step adapters.
5. Snug all four screws first. Then torque to 25 N-m (18 ft-lb) using the 5 mm hex key.

## Step 3: Mount the Motor + Gearbox (5 minutes)

The motor + gearbox assembly drops onto the bracket's lower face. It mates to the OEM winch shaft via a square coupler.

1. Slip the square coupler (already attached to the gearbox output shaft) over the OEM winch's square shaft.
2. Lower the motor + gearbox onto the bracket. Four through-holes on the gearbox flange align with four threaded holes on the bracket.
3. Insert four M10 SHCS through the gearbox flange into the bracket. Snug, then torque to 35 N-m (26 ft-lb).
4. Verify the coupler is square on the OEM shaft (no skew). Tighten the coupler grub screw with the 4 mm hex key. **Do not over-tighten;** the grub screw is intended to slip at 200% of rated torque to protect the OEM winch.

## Step 4: Install the Battery Sled (2 minutes)

The battery sled mounts on the upper face of the bracket.

1. Place the sled on the bracket so that the battery slot faces forward (toward the operator).
2. Two M6 SHCS go through the sled's mounting plate into bosses on the bracket. Snug to 8 N-m (6 ft-lb).
3. Do not insert the battery yet.

## Step 5: Install the Load Cell Shear-Pin (3 minutes)

The load cell replaces the OEM cable anchor pin at the carriage.

1. Locate the cable anchor pin on the carriage (front of the fork mount). It's a clevis-style pin retained by a cotter pin.
2. Remove the cotter pin and slide out the OEM anchor pin.
3. Insert the load cell shear-pin in its place. The orange end caps go on either side. Use the new cotter pin from the hardware kit.
4. The cell's connector cable is pre-terminated with a yellow M8 4-pin plug. Run the cable along the side of the mast (outside the cable path), securing with the supplied zip ties.

## Step 6: Install the Control Box (2 minutes)

The control box snaps into a cradle on the bracket above the motor.

1. The control box has two spring tabs on its side. Slide it into the bracket cradle until the tabs click home.
2. The control box is held by the spring tabs only. To remove later, press both tabs and slide out.

## Step 7: Connect the Wiring (4 minutes)

All connectors are keyed and color-coded. **You cannot connect them wrong. If a connector won't seat, you have the wrong cable.**

1. **Battery harness (red M16):** Plug into the J1 port on the control box and into the battery sled.
2. **Motor harness (gray M16):** Plug into the J2 port on the control box and into the motor.
3. **Pendant cable (green M12):** Plug into the J3 port on the control box. The other end is the pendant itself; clip the pendant to the mast at a comfortable height with the supplied clip.
4. **Load cell (yellow M8):** Plug into the J4 port on the control box. The other end is already on the shear-pin.
5. **Limit switch / sensor (yellow M8):** Plug into the J5 port. (The R-250 kit does not require this for v1; the cable is pre-coiled and terminated for future use.)

Run any slack cable along the mast and secure with zip ties. Leave a 6 in service loop at the control box end.

## Step 8: Insert the Battery and Power On (2 minutes)

1. Insert your FlexVolt or M18 battery into the sled. The system powers on automatically.
2. The pendant OLED displays:
   ```
   KILLIAN KIT v1.0.0
   SELF-TEST...
   ```
3. The self-test takes about 15 seconds. It checks:
   - Load cell zero
   - Tilt sensor presence and zero
   - Motor halls
   - Brake actuator
   - Pendant connection
   - Battery voltage
4. On success, the pendant displays:
   ```
   READY
   LOAD: 0 lb
   HOST: R-250
   ```
5. On failure, the pendant displays a fault code and the buzzer beeps. Common faults:
   - Fault E01: Load cell not detected. Check the J4 connection.
   - Fault E02: Tilt sensor offset. Place lift on level surface and press AUX to re-zero.
   - Fault E03: Battery voltage low. Insert a fresh battery.
   - Fault E04: Motor halls error. Check J2 connection.

## Step 9: Function Test (4 minutes)

1. **No load lift test:** Press UP on the pendant. The mast should rise. Lift to 5 ft. Press DOWN. The mast should descend back to bottom. Verify smooth motion, no grinding.
2. **E-stop test:** Lift to 5 ft. Press the red mushroom on the pendant. The lift should stop within 100 ms. Twist the mushroom to release. Press UP again to confirm operation resumes.
3. **Tilt cutoff test (do this on a known slope >2 deg):** Lift to 12 ft. The system should refuse and display "TILT FAULT" if you are above 1.5 deg. If you have no slope available, this test can be skipped; the cloud dashboard runs an automatic tilt verification on first connection.

## Step 10: Connect to Cloud (Optional, 3 minutes)

1. Open the Killian Lift app on your phone (iOS or Android).
2. Tap "Add device." The app pairs to the kit via BLE.
3. Enter your WiFi credentials. The kit joins your hotspot or job WiFi.
4. The app confirms the device is online. The dashboard at killianlift.com/dash shows your device with its serial number and current state.

If you ordered the Pro telemetry option (LTE-M and GPS), the device connects automatically over cellular and you skip WiFi setup.

## Step 11: Save the Original Hand Crank

Place the OEM hand crank in a labeled bag (provided). Keep it with the lift's records. If you ever sell the lift, the crank goes with it.

## You're Done

The kit is installed. The lift now has:

- Brushless DC drive (button instead of crank)
- Variable speed
- Load cell with overload alarm and cutoff
- Tilt sensor cutoff
- E-stop
- Cycle counter
- Cloud telemetry (if connected)

Total time: 30 minutes if this is your first one. Future kits install in 15.

## To Reverse the Kit (5 minutes)

1. Remove the battery.
2. Disconnect the four field connectors (battery, motor, pendant, load cell).
3. Press the control box spring tabs and slide it out.
4. Unbolt the gearbox (4x M10) and lift it off.
5. Loosen the coupler grub screw and slide the coupler off the OEM winch shaft.
6. Unbolt the bracket (4x M10).
7. Re-install the OEM hand crank handle and retaining clip.
8. Re-install the OEM cable anchor pin.

The lift is back to OEM. Save the kit; you can reinstall on a different unit.

## Service and Support

- Online manual and install video: killianlift.com/install
- Email support: support@killianlift.com (24 hr response weekdays)
- Phone: (TBD)
- Warranty: 2 years from purchase, registration recommended at killianlift.com/register

## Compliance Notes

The kit, when installed:

- Does not modify the host product's load-bearing structure
- Does not change the host product's rated capacity
- Does not invalidate the host product's ANSI/ASSP A10.5-2020 compliance
- Adds overload, tilt, and emergency-stop features that the host product does not have

Periodic inspection per OSHA 1926.552 still applies. The kit's cloud dashboard tracks inspection due dates and emits reminders.
