// ==LICENSE-BEGIN==
// Copyright 2017 European Digital Reading Lab. All rights reserved.
// Licensed to the Readium Foundation under one or more contributor license agreements.
// Use of this source code is governed by a BSD-style license
// that can be found in the LICENSE file exposed on Github (readium) in the project repository.
// ==LICENSE-END==

import { winActions } from "readium-desktop/renderer/redux/actions/";

import { THistoryState } from "../states/history";

const initialState: THistoryState = [];

export function historyReducer(
    state: THistoryState = initialState,
    action: winActions.history.TAction,
) {
    switch (action.type) {
        case winActions.history.ID:
            const history = state.slice();

            history.push(action.payload);

            return history;

        default:
            return state;

    }
}
