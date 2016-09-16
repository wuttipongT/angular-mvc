

app.constant('msgSettings', {
    msgDelConfirm: "ยืนยันการลบข้อมูล",
    msgDelSucc: "ลบข้อมูลสำเร็จ",
    msgDelFail: "ลบข้อมูลไม่สำเร็จ",
}).constant('masterDataConstant', {
    'documentType': [
            { value: '0', text: '0 = ใบขนสินค้าขาเข้า' },
            { value: '2', text: '2 = ใบขนสินค้าผ่านแดน' },
            { value: '3', text: '3 = คำร้องขอรับของไปก่อน' },
            { value: '5', text: '5 = ใบขนสินค้าขาเข้าปากระวาง' },
            { value: '7', text: '7 = ใบขนสินค้าพิเศษผ่านแดนขาเข้า' },
            { value: '8', text: '8 = ใบขนสินค้าถ่ายลำ (Transhipment)' },
            { value: 'A', text: 'A = ใบขนฯโอนย้ายภายใน ปท.' },
            { value: 'C', text: 'C = ใบขนสินค้าขาเข้าโอนย้ายจากเขตปลอดอากร FZ' },
            { value: 'E', text: 'E = คำร้องขอนำไปแสดงนิทรรศการ' },
            { value: 'F', text: 'F = คำร้องขอทำลาย' },
            { value: 'G', text: 'G = คำร้องขอนำเข้าในเขตอารักขาศุลกากร' },
            { value: 'T', text: 'T = คำร้องขอนำของไทยเข้าเขตอารักขาศุลกากร' },
            { value: 'X', text: 'X = ใบขนสินค้าขาเข้าของเร่งด่วน' }
    ],
    'importType': [
            { value: '1', text: '1 = เรือ' },
            { value: '2', text: '2 = รถไฟ' },
            { value: '3', text: '3 = รถยนต์' },
            { value: '4', text: '4 = เครื่องบิน' },
            { value: '5', text: '5 = ไปรษณีย์' },
            { value: '7', text: '7 = ทางท่อขนส่งทางบก, ทางสายส่งไฟฟ้า' },
            { value: '8', text: '8 = ทางเรือที่เข้าออกด่านศุลกากรทางบก, เรือเล็กทางทะเล' },
            { value: '9', text: '9 = ทางผู้โดยสารนำพาจากอากาศยาน' }
    ],
    'packingType': [
            { value: '0', text: '0 = No Cargo Unit (Liquid Bulk Goods)' },
            { value: '1', text: '1 = No Cargo Unit (Solid Bulk Goods)' },
            { value: '2', text: '2 = Large Freight Containers' },
            { value: '3', text: '3 = Other Freight Containers' },
            { value: '4', text: '4 = Palletized' },
            { value: '5', text: '5 = Pre-Slung' },
            { value: '6', text: '6 = Mobile Self-Propelled Units' },
            { value: '7', text: '7 = Other Mobile Units' },
            { value: '9', text: '9 = Other Cargo Types' }
    ],
    'payMethod': [
            { value: '00', text: '0 = กรุณาเลือก Payment Method' },
            { value: '01', text: 'H = ชำระผ่านธนาคาร' },
            { value: '02', text: 'A = ชำระที่กรมศุลกากร' },
            { value: '03', text: 'L = ไม่มีการชำระ' }
    ],
    'avgNwMtd': [
            { value: 'NONE', text: 'NONE' },
            { value: 'VALTHB', text: 'VALTHB' },
            { value: 'QTY', text: 'QTY' }
    ],
    'avgGwMtd': [
            { value: 'NONE', text: 'NONE' },
            { value: 'VALTHB', text: 'VALTHB' },
            { value: 'QTY', text: 'QTY' },
            { value: 'NW', text: 'NW' }
    ],
    'guaranteeMethod': [
            { value: 'L', text: 'L = ไม่มีการวางประกัน' },
            { value: 'A', text: 'A = วางประกันที่กรมศุลกากร' },
            { value: 'H', text: 'H = วางประกันผ่านธนาคาร' }
    ],
    'guaranteeType': [
            { value: 'C', text: 'C = เงินสด' },
            { value: 'B', text: 'B = หนังสือธนาคารค้ำประกัน' },
            { value: 'E', text: 'E = eGuarantee Deposit' },
            { value: 'M', text: 'M = หนังสือราชการ' }
    ],
    'jobAvgChargeMtd1': [
            { value: 'NONE', text: 'NONE' },
            { value: 'VALTHB', text: 'VALTHB' },
            { value: 'NW', text: 'NW' },
            { value: 'QTY', text: 'QTY' }
    ],
    'jobAvgChargeMtd2': [
            { value: 'NONE', text: 'NONE' },
            { value: 'VALTHB', text: 'VALTHB' },
            { value: 'NW', text: 'NW' },
            { value: 'QTY', text: 'QTY' }
    ],
    'avgNWMtd': [
            { value: 'NONE', text: 'NONE' },
            { value: 'VALTHB', text: 'VALTHB' },
            { value: 'QTY', text: 'QTY' }
    ],
    'avgGWMtd': [
            { value: 'NONE', text: 'NONE' },
            { value: 'VALTHB', text: 'VALTHB' },
            { value: 'QTY', text: 'QTY' },
            { value: 'NW', text: 'NW' }

    ],
    'avgChargeMtd': [
            { value: 'NONE', text: 'NONE' },
            { value: 'VALTHB', text: 'VALTHB' },
            { value: 'NW', text: 'NW' },
            { value: 'QTY', text: 'QTY' }
    ],
    'priceTerm': [
         { value: 'C&F', text: 'C&F' },
         { value: 'C&I', text: 'C&I' },
         { value: 'CIF', text: 'CIF' },
         { value: 'FOB', text: 'FOB' },
         { value: 'EXW', text: 'EXW' },
         { value: 'EXWA1', text: 'EXWA1' }
    ],
    'avgDiffRateMtd': [],
    'natureTran': [
            { value: '11', text: '11 : เป็นการค้า' },
            { value: '21', text: '21 : เป็นของแถมหรือไม่มีมูลค่าทางการค้า' },
            { value: '90', text: '90 : รับจ้างทำของและอื่น ๆ' },
    ],
    'calType': [
           { value: 'Amt.', text: 'Amt.' },
           { value: 'Price', text: 'Price' },
           { value: 'Qty.', text: 'Qty.' },
           { value: 'None', text: 'None' }
    ],
    'inc_By': [
          { value: 'NW', text: 'NW' },
          { value: 'QTY.INV.', text: 'QTY.INV.' },
          { value: 'QTY.DCL.', text: 'QTY.DCL.' }
    ],
    'royalty': [
            { value: '1', text: '1 = มีค่าสิทธิ์รวมอยู่ในราคาของนำเข้า' },
            { value: '2', text: '2 = มีค่าสิทธิ์ยังไม่รวมอยู่ในราคาของนำเข้า ' }
    ],
    'royaltyDetail': [
            { value: '1', text: '1 = Selling Commission and Brokerage คือ ค่าบำเหน็จตัวแทนจากการขาย และค่านายหน้าหรือค่าคนกลาง' },
            { value: '2', text: '2 = The cost of containers คือ ค่าภาชนะบรรจุ' },
            { value: '3', text: '3 = The cost of packing คือ ค่าบรรจุหีบห่อ' },
            { value: '4', text: '4 = Royalties and License fees คือ ค่าสิทธิ์หรือค่าธรรมเนียมใบอนุญาต' },
            { value: '5', text: '5 = Subsequent resale คือ เงินได้จากการขายต่อในภายหลัง จากการจำหน่วยหรือการใช้ของผู้นำเข้า' },
            { value: '6', text: '6 = Assistance คือ ค่าวัสดุเสริม (ความช่วยเหลือ)' }
    ],
    'depSub_0100': [
            { value: 'F', text: 'F: ไม่ต้องลบวางประกันออกจากอากรที่ต้องชำระ' },
            { value: 'T', text: 'T: ลบวางประกันออกจากอากรที่ต้องชำระ' },
            { value: '0', text: '0: Clear ยอดอากรที่ต้องชำระ' }
    ],
    'depSub_0500': [
            { value: '11', text: '11: เป็นการค้า' },
            { value: 'P01', text: 'P01 = ขอสงวนสิทธิโต้แย้งปัญหาราคา' },
            { value: 'P02', text: 'P02 = ขอสงวนสิทธิโต้แย้งปัญหาพิกัดอัตราอากร' },
            { value: 'P03', text: 'P03 = ขอสงวนสิทธิโต้แย้งปัญหาปริมาณ' },
            { value: 'P30', text: 'P30 = ขอสงวนสิทธิโต้แย้งปัญหาปริมาณสรรพสามิต' },
            { value: 'P12', text: 'P12 = ขอสงวนสิทธิการใช้สิทธิพิเศษตามมาตรา 12' },
            { value: 'P14', text: 'P14 = ขอสงวนสิทธิการใช้สิทธิพิเศษตามมาตรา 14' }
    ],
    'depSub_0300': [
            { value: 'F', text: 'F: ไม่ต้องลบวางประกันออกจากอากรที่ต้องชำระ' },
            { value: 'T', text: 'T: ลบวางประกันออกจากอากรที่ต้องชำระ' },
            { value: '0', text: '0: Clear ยอดอากรที่ต้องชำระ' }
    ],
    'depSub_0400': [
            { value: 'F', text: 'F: ไม่ต้องลบวางประกันออกจากอากรที่ต้องชำระ' },
            { value: 'T', text: 'T: ลบวางประกันออกจากอากรที่ต้องชำระ' },
            { value: '0', text: '0: Clear ยอดอากรที่ต้องชำระ' }
    ],
    'permission_Type': [
            { value: '1', text: '1.  อนุญาตให้นำของเข้าตามมาตรา 12' },
            { value: '2', text: '2.  อนุญาตให้นำของเข้าออกได้เป็นราย Shipment' },
            { value: '3', text: '3.  อนุญาตให้นำของเข้าออกได้ตามช่วงเวลาที่กำหนดไว้เท่านั้น' }
    ]
});